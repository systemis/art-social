export enum ProductTag {
  UI="PRODUCTAG::UI",
  ANIMATION="PRODUCTAG::ANIMATION",
  LOGO="PRODUCTAG::LOGO",
  BRANDING="PRODUCTAG::BRANDING",
  DESIGN="PRODUCTAG::DESIGN",
}

export interface ProductEntity {
  /**
   * @dev Product id
   */
  _id: string;
  gallery: string[];
  userId: string;
  description: string;
  createdDate: Date;
  updateDate: Date;
  projectId?: string;
}