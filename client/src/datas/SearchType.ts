export interface SearchType {
  images: {
    jpg: {
      large_image_url: string;
    };
  };

  title: string;
  mal_id: number;

  aired: {
    prop: {
      from: {
        year: string;
      };
      to: {
        year: string;
      };
    };
  };

  genres: [
    {
      name: string;
    },
  ];

  synopsis: string;
}
