export type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

export const features: FeatureProps[] = [
  { icon: "🚀", title: "Fast", description: "Built for speed and efficiency" },
  { icon: "⚡", title: "Modern", description: "Using latest web technologies" },
  { icon: "🛠️", title: "Simple", description: "Easy to use and maintain" },
];

export const Feature = ({ icon, title, description }: FeatureProps): string => `
  <div class="feature">
    <h3>${icon} ${title}</h3>
    <p>${description}</p>
  </div>
`; 