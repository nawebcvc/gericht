export default function (id: string, delay: number = 2000) {
    if (document.getElementById(id)) {
        if (delay < 1000) {
            delay = 1000;
            console.warn("Carousel delay is very low -> changed to 1s");
        }
        const list = document.getElementById(id) as HTMLUListElement;
        let i = 0;

        const nextSlide = () => {
            i = (i + 1) % list.children.length;
            const translateValue = -i * 100 + '%';
            (list.children[i] as HTMLLIElement).style.transform = 'translateX(' + translateValue + ')';
            (list.children[i > 0 ? i - 1 : 2] as HTMLLIElement).style.transform = 'translateX(' + translateValue + ')';
        }

        setInterval(nextSlide, delay);
    } else {
        console.error("List element not found");
    }
};