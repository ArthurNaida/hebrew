import { useRouter } from "vue-router";
import { onMounted } from "vue";

export function useWindowResize(windowSize: {[key: string]: number}) {
    window.addEventListener('resize', () => {
        windowSize.width = window.innerWidth;
        windowSize.height = window.innerHeight;
    })
}

export async function useActivePage(activePage: string) {
    const router = useRouter()
    console.log(activePage)
    console.log(router.currentRoute.value.fullPath)
    onMounted(async () => {
        await router.isReady()
        return router.currentRoute.value.fullPath
    })
}
