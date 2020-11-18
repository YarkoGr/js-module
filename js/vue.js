Vue.component("todo-item", {
    template: `<li>
                    <h3>{{listItem.name}}</h3>
                    <p>{{listItem.text}}</p>
                    <sapan>{{testData}}</sapan>
                </li>`,
    // props: ["element"],
    props: {
        // listItem: {
        //     type: Object,
        //     default () {
        //         return {
        //             name: "Default",
        //             text: "Default text",
        //         };
        //     },
        // },
        title: {
            type: String,
            default: "Default title",
        },
        text: {
            type: String,
            default: "Default text",
        },
    },
    data() {
        return {
            testData: this.idx,
        };
    },
});
//
//
const app = new Vue({
    el: "#app",
    data: {
        message: "hello vue",
        newMessage: "revers message",
        title: new Date().toLocaleString(),
        showText: false,

        list: [
            { id: 1, name: "first", text: "wfrcv" },
            { id: 2, name: "second", text: "wfsdfwecv" },
            { id: 3, name: "third", text: "wseffv" },
        ],
    },
    methods: {
        showConsole() {
            console.log(`test`);
        },
        toggleText() {
            this.showConsole();
            this.showText = !this.showText;
        },
        reverseMessage() {
            this.newMessage = this.newMessage.split("").reverse("").join("");
        },
    },

    computed: {
        modifiedMessage() {
            return this.showText ? `${this.message}$$$$` : this.message;
        },
    },
});