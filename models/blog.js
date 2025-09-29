import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const blogViewSchema = new mongoose.Schema({
  city: { type: String, required: true },
  count: { type: Number, default: 0 },
});

const metaInfoSchema = new mongoose.Schema({
  meta_title: String,
  meta_description: String,
  meta_keywords: [String],
});

const adSchema = new mongoose.Schema({
  ads_id: { type: String, required: true },
  ads_code: String,
});

const faqSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  question: String,
  answer: String,
});

const blogSchema = new mongoose.Schema(
  {
    blog_id: { type: String, required: true, unique: true },
    blog_title: { type: String, required: true },
    blog_slug: { type: String, required: true },
    blog_banner: String,
    blog_content: { type: String, required: true },
    blog_content_plain: { type: String },
    blog_keywords: [String],
    blog_views: { type: Number, default: 0 },
    blog_views_from: [blogViewSchema],
    blog_like: { type: Number, default: 0 },
    blog_share_count: { type: Number, default: 0 },
    search_terms: [String],
    blog_meta_info: metaInfoSchema,
    seo_score: { type: Number, default: 0 },
    ads: [adSchema],
    faq: [faqSchema],
    table_content: [
      {
        id: String,
        text: String,
        level: String,
        tag: String,
      },
    ],
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    categories: [String],
    tags: [String],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    published_at: Date,
    liked_ips: {
      type: [String],
      default: [],
    },
    shared_by_ips: {
      type: [String],
      default: [],
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Prevent model overwrite issue in Next.js
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;