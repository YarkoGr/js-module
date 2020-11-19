const classroom = [{
        name: "large",
        places: 18,
        faculty: "History",
    },
    {
        name: "everage",
        places: 10,
        faculty: "History",
    },
    {
        name: "small",
        places: 6,
        faculty: "History",
    },
    {
        name: "large",
        places: 19,
        faculty: "Economic",
    },
    {
        name: "everage",
        places: 12,
        faculty: "Economic",
    },
    {
        name: "small",
        places: 8,
        faculty: "Economic",
    },
    {
        name: "large",
        places: 15,
        faculty: "Politology",
    },
    {
        name: "everage",
        places: 10,
        faculty: "Politology",
    },
    {
        name: "small",
        places: 5,
        faculty: "Politology",
    },
];
document.getElementById("btn27-4-1").onclick = (event) => {
    event.preventDefault();
    //Вывод на экран всех аудиторий;
    function allClasrooms() {
        let printAllClasrooms = "";
        for (let i of classroom) {
            printAllClasrooms +=
                "Class of " + [i.faculty] +
                " ; Places = " + [i.places] +
                " ; Size = " + [i.name] +
                "\n";
        }
        return printAllClasrooms;
    }
    alert(allClasrooms());
};
//Вывод на экран аудиторий для указанного факультета
document.getElementById("btn27-4-2").onclick = (event) => {
    event.preventDefault();
    const searchClasses = prompt(
        `Enter name faculty for saerch (History, Economic, Politology)`,
        "Economic"
    );

    function classroomsForFaculty() {
        let findedClasses = "";
        for (let i of classroom) {
            if ([i.faculty] == searchClasses) {
                findedClasses += [i.faculty] + " " + [i.name] + " " + [i.places] + "\n";
            }
        }

        return findedClasses;
    }

    alert(`There are:\n${classroomsForFaculty()}`);
};
//Вывод на экран только тех аудиторий, которые подходят для переданной группы
document.getElementById("btn27-4-3").onclick = (event) => {
    event.preventDefault();
    const searchClassesForGroup = prompt(
        `Enter size of group for saerch (large, everage, small)`,
        "everage"
    );

    function classroomsForGroup() {
        let findedSizes = "";
        for (let i of classroom) {
            if ([i.name] == searchClassesForGroup) {
                findedSizes += [i.faculty] + " " + [i.name] + " " + [i.places] + "\n";
            }
        }

        return findedSizes;
    }

    alert(`There are:\n${classroomsForGroup()}`);
};
//Функция сортировки аудиторий по количеству мест;
document.getElementById("btn27-4-4").onclick = (event) => {
    event.preventDefault();
    classroom.sort((a, b) => {
        return a.places - b.places;
    });
    let sortByPlaces = "";
    for (let i of classroom) {
        sortByPlaces += [i.places] + " " + [i.faculty] + " " + [i.name] + "\n";
    }
    alert(`Sort by pleces:\n${sortByPlaces}`);
};
//Функция сортировки аудиторий по названию (по алфавиту).
document.getElementById("btn27-4-5").onclick = (event) => {
    event.preventDefault();
    classroom.sort(function(a, b) {
        if (a.faculty < b.faculty) {
            return -1;
        } else if (a.faculty > b.faculty) {
            return 1;
        }
        return 0;
    });
    let sortByNameOfFaculty = "";
    for (let i of classroom) {
        sortByNameOfFaculty += [i.faculty] + " " + [i.name] + " " + [i.places] + "\n";
    }
    alert(`Sort by names:\n${sortByNameOfFaculty}`);
};