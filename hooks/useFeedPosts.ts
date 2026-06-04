import { useFeedStore } from '@/store/feed-store';

export function useFeedPosts() {
    const posts = useFeedStore(s => s.posts);
    const loading = useFeedStore(s => s.loading);
    const error = useFeedStore(s => s.error);
    const fetchFeed = useFeedStore(s => s.fetchFeed);
    const loadMore = useFeedStore(s => s.loadMore);

    return { posts, loading, error, fetchFeed, loadMore };
}
