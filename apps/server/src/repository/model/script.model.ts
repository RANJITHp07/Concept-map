import mongoose, { Schema } from "mongoose";
import {
  TVCOTTSeriesGenre,
  ShortsGenre,
  IndustryCategory,
  ScriptCategory,
  ScriptType,
  IScript,
} from "../../types/model";

const ScriptSchema: Schema = new Schema(
  {
    main_title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(ScriptCategory),
      required: true,
    },
    genre: {
      type: String,
      enum: [
        ...Object.values(TVCOTTSeriesGenre),
        ...Object.values(ShortsGenre),
      ],
      required: true,
    },
    industry_category: {
      type: String,
      enum: Object.values(IndustryCategory),
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(ScriptType),
      required: true,
    },
    script: [
      {
        name: {
          type: String,
          required: true,
        },
        scenes: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    story_borad: [
      {
        name: {
          type: String,
          required: true,
        },
        cloud_key: {
          type: String,
          required: true,
        },
      },
    ],
    synopsis: {
      description: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const ScriptModel = mongoose.model<IScript>("Script", ScriptSchema);

export default ScriptModel;
