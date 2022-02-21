import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'sp6ek08z',
	dataset: 'production',
	apiVersion: '2021-03-25',
	token: 'skKuKZHHBGCdVSJFfM4OuxWDdP4z07bbnopwOM82m9lrUfXyscHmLe7PeAaqL112xyAl2bXaHWf4Q9KjTvGmc6j7I9BaxOdDBKFr8IvrVLdgfwDOSmwwN80G970xuUyC3W8LaICY0n5YUHgMHbpJpPimm7b9WQxzv5k9gZScA0Igqyj1Nri5',
	useCdn: false
});