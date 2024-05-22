import { useEffect, useCallback } from 'react';

export default function useDebounce(
    effect: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    dependencies: any[],
    delay: number) {
    const callback = useCallback(effect, dependencies);

    useEffect(() => {
        const timeout = setTimeout(callback, delay);
        return () => clearTimeout(timeout);
    }, [callback, delay]);
}