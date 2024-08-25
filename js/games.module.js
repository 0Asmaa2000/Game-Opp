
import { ui } from "./ui.module.js";

export class games {
    constructor() {
        this.ui = new ui();
        this.initializeEvents();
        this.getGames('mmorpg');
    }

    initializeEvents() {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', async () => {
                this.moveActiveLinks(link);
                const category = link.dataset.category;
                console.log(category);
                await this.getGames(category);
            });
        });
    }

    moveActiveLinks(link) {
        document.querySelector('.navbar-nav .active')?.classList.remove("active"); 
        link.classList.add('active');
    }

    async getGames(category) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '19e2c62d98msh4b66d7f91809421p1fbd6djsn9167b547e06b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            if (!api.ok) {
                throw new Error(`HTTP error! Status: ${api.status}`);
            }
            const response = await api.json();
            console.log(response);
            this.ui.displaygame(response);
            this.attachCardClickEvents();
       
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    }

    attachCardClickEvents() {
        document.querySelectorAll('.card').forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.dataset.id;
            });
        });
    }


}
