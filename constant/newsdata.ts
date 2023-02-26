const news = [
  {
    id: 1,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-16T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-17T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-17T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-17T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-17T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1637094410849-96576479b731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1637094410849-96576479b731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1637094410849-96576479b731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1637094410849-96576479b731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
    subTitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nisl a porta vulputate. Nulla facilisi. In hac habitasse platea dictumst. Donec sit amet dictum enim. Ut aliquam quis nisl et lobortis. Etiam consequat vehicula laoreet. Integer non tempor neque. Sed euismod suscipit diam ut feugiat. Phasellus est sem, rhoncus quis dui sed, commodo iaculis velit. Proin ultricies cursus dui, eget tristique neque vulputate vitae. Quisque mollis erat quam, a maximus nunc tempus ut. Fusce et ligula eget est feugiat posuere non at quam. ',
    date: '2023-01-17T20:01:08.000Z',
    sliderStrings: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    homepageImage:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export default news;
