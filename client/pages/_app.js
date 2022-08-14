//import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import buildClient from '../api/build-client';

//https://github.com/vercel/next.js/blob/deprecated-main/errors/css-global.md
const AppComponent = ({ Component, pageProps, shorten }) => {
  return <Component shorten={shorten} {...pageProps} />;
};

AppComponent.getInitialProps = async (appContext) => {
  // console.log(Object.keys(appContext));
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/shorten');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.shorten
    );
    console.log('PAGEPROPS: ', pageProps);
  }
  return {
    pageProps,
    //shorten: data.shorten,==>
    ...data,
  };
};

export default AppComponent;
