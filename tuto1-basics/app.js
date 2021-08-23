const users = 
[
    {
        username: 'lolo', 
        age: 37,
        profil: 'lolo.jpg',
        isAdmin : false,
    },
    {
        username: 'lola',
        age: 1,
        profil: 'lola.jpg',
        isAdmin : false,
    },
    {
        username: 'Foon',
        age: 1,
        profil: 'fon.jpg',
        isAdmin : false,
    },
    {
        username: 'Maman',
        age: 1,
        profil: 'maman.jpg',
        isAdmin : false,
    }
]

function isAdmin(user) {
    return user.isAdmin === true;
}

const app = Vue.createApp({
    data: function () {
        return {
            title: 'titre numero 1',
            author: 'Lolo',
            age: 38,
            showBooks: true,
            x: 0,
            y: 0,
            users: users,
            url: "http://site.com"
        }
    },
    methods: {
        changeTitle(newTitle) {
            console.log("you clicked me");
            this.title = newTitle;
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvents(arg, event) {
            console.log(`event = ${event}`);
            console.log(`arg = ${arg}`);
            console.log(event);
            if (event.type == "mouseleave") {
                console.log("on met lola admin");
                this.users.forEach(user => {
                    user.isAdmin = !user.isAdmin;
                });
            }
        },

        handleMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;

        },



        makeAdmin(user) {
            
            let oldAdmin = this.users.filter(e => {
                   return isAdmin(e);
                });
            if (oldAdmin[0]) {
                oldAdmin[0].isAdmin = false;
            }
            user.isAdmin = true;
            //console.log(isAdmin(user))
        },

        
    }
});


app.mount('#app')

//https://www.youtube.com/watch?v=F7PLPJqVotk&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=2