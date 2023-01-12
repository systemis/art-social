export enum ProductTag {
  UI="PRODUCTAG::UI",
  ANIMATION="PRODUCTAG::ANIMATION",
  LOGO="PRODUCTAG::LOGO",
  BRANDING="PRODUCTAG::BRANDING",
  DESIGN="PRODUCTAG::DESIGN",
}

interface OwnerProps {
  name: string;
  picture: string;
  username: string;
}

export interface ProductEntity {
  /**
   * @dev Product id
   */
  _id: string;
  gallery: string[];
  userId: string;
  owner: OwnerProps;
  description: string;
  createdDate: Date;
  updateDate: Date;
  projectId?: string;
  reactions?: string[];
}