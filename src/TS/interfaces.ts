interface BookVolume {
    kind: string;
    totalItems: number;
    items: BookItem[];
}
  
interface BookItem {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
}

interface VolumeInfo {
    authors: [string];
    title: string;
    averageRating: number;
    ratingsCount: number;
    description: string;
    imageLinks: {smallThumbnail: string; thumbnail: string};
}