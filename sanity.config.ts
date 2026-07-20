import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Define your schema types
const schemaTypes = [
  {
    name: 'hero',
    type: 'document',
    title: 'Hero Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'subheadline', type: 'text', title: 'Subheadline' },
      { name: 'ctaText', type: 'string', title: 'CTA Button Text' },
      { name: 'secondaryCtaText', type: 'string', title: 'Secondary CTA Text' },
    ],
  },
  {
    name: 'services',
    type: 'document',
    title: 'Services Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'description', type: 'text', title: 'Description' },
      {
        name: 'items',
        type: 'array',
        title: 'Service Items',
        of: [{
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
          ],
        }],
      },
    ],
  },
  {
    name: 'stages',
    type: 'document',
    title: 'Project Stages Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'caption', type: 'string', title: 'Caption' },
      {
        name: 'items',
        type: 'array',
        title: 'Stage Items',
        of: [{
          type: 'object',
          fields: [
            { name: 'num', type: 'string', title: 'Number' },
            { name: 'title', type: 'string', title: 'Title' },
          ],
        }],
      },
    ],
  },
  {
    name: 'featuredProject',
    type: 'document',
    title: 'Featured Project Section',
    fields: [
      { name: 'headline', type: 'string', title: 'Project Name' },
      { name: 'subheadline', type: 'string', title: 'Subtitle' },
      { name: 'client', type: 'string', title: 'Client' },
      { name: 'scope', type: 'string', title: 'Scope' },
      { name: 'value', type: 'string', title: 'Project Value' },
      { name: 'ctaText', type: 'string', title: 'CTA Text' },
      { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
    ],
  },
  {
    name: 'about',
    type: 'document',
    title: 'About Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'ctaText', type: 'string', title: 'CTA Text' },
      {
        name: 'cards',
        type: 'array',
        title: 'About Cards',
        of: [{
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
          ],
        }],
      },
    ],
  },
  {
    name: 'projects',
    type: 'document',
    title: 'Projects Grid Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'ctaText', type: 'string', title: 'CTA Text' },
      {
        name: 'items',
        type: 'array',
        title: 'Project Items',
        of: [{
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'subtitle', type: 'string', title: 'Subtitle' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
          ],
        }],
      },
    ],
  },
  {
    name: 'contact',
    type: 'document',
    title: 'Contact Section',
    fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'headline', type: 'string', title: 'Headline' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone' },
      { name: 'location', type: 'string', title: 'Location' },
      { name: 'ctaText', type: 'string', title: 'CTA Button Text' },
    ],
  },
];

export default defineConfig({
  name: 'default',
  title: 'Daisy Consulting Engineers',
  projectId: 'YOUR_PROJECT_ID', // Will be replaced
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
