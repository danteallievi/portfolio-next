import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ISkillCard {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}

export interface IProjectCard {
  onClick?: () => void;
  name: string;
  imagePath: string;
}
