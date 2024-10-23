interface ProductObject {
  id: number;
  title: string;
  type: ProductCategory;
  description: string;
  visible: boolean;
}
enum ProductCategory {
  Consulting = "Consulting",
  Content = "Content",
  Training = "Training"

}

export const Products: ProductObject[] = [
  {
    id: 1,
    type: ProductCategory.Consulting,
    title: 'Product Strategy Definition',
    description: 'Define your product\'s direction, align stakeholders on a shared vision, and create a roadmap to bring ideas to life.',
    visible: true,
  },
  {
    id: 2,
    type: ProductCategory.Training,
    title: 'Boost Team Productivity With Gen AI',
    description: 'Learn how to leverage Gen AI solutions to boost your impact in Product Management',
    visible: true,
  },
  {
    id: 3,
    type: ProductCategory.Consulting,
    title: 'Risk Management & Mitigation Consulting',
    description: 'Identify potential risks early in the product lifecycle and develop strategies to mitigate these risks effectively.',
    visible: true,
  },
  {
    id: 4,
    type: ProductCategory.Consulting,
    title: 'AI & Generative AI Integration for Products',
    description: 'Integrate cutting-edge AI and generative AI technologies into your products to enhance user experience and automation.',
    visible: true,
  },
  {
    id: 5,
    type: ProductCategory.Consulting,
    title: 'User Research & Persona Development',
    description: 'Conduct user research and develop personas to deeply understand your customers and tailor products to their needs.',
    visible: true,
  },
  {
    id: 6,
    type: ProductCategory.Training,
    title: 'MVP Development & Testing',
    description: 'Develop and test a Minimum Viable Product (MVP) to validate your concept and gather early user feedback.',
    visible: true,
  },
  {
    id: 7,
    type: ProductCategory.Consulting,
    title: 'Independent Project Quality Assurance (IQA)',
    description: 'Provide independent quality assurance to ensure your product meets the highest standards before going live.',
    visible: true,
  },
  {
    id: 8,
    type: ProductCategory.Consulting,
    title: 'Product Analytics & KPI Development',
    description: 'Set up analytics frameworks and KPIs to measure product performance and make data-driven decisions.',
    visible: true,
  },
];
