declare type Diploma = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

declare type GetDiplomasAPIResponse = {
  message: string;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
    prevPage?: number;
  };
  subjects: Diploma[];
};
