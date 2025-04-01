export interface Author {
    id: number;
    firstname: string;
    lastname: string;
  }
  
export interface AuthorCreationData {
    firstname: string;
    lastname: string;
}

export interface Book {
    id: number;
    title: string;
    author?: Author;
  } 

export interface PaginationProps {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (newPage: number) => void;
  }