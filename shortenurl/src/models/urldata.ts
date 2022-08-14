import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface ShortUrlAttrs {
  title: string;
  description: string;
  longUrl: URL;
  shortUrl: string;
  createdDate: Date;
  key: string;
}

interface ShortUrlDoc extends mongoose.Document {
  title: string;
  description: string;
  longUrl: URL;
  shortUrl: string;
  createdDate: Date;
  key: string;
}

interface ShortUrlModel extends mongoose.Model<ShortUrlDoc> {
  build(attrs: ShortUrlAttrs): ShortUrlDoc;
}

const shortUrlSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    createdDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.version;
      },
    },
  }
);

shortUrlSchema.set('versionKey', 'version');
shortUrlSchema.plugin(updateIfCurrentPlugin);

shortUrlSchema.statics.build = (attrs: ShortUrlAttrs) => {
  return new UrlData(attrs);
};

const UrlData = mongoose.model<ShortUrlDoc, ShortUrlModel>(
  'urlData',
  shortUrlSchema
);

export { UrlData };
