'use strict'

const projects = [
    {
        id: 1,
        title: 'project 1',
        pathURL:'assets/door.jpg',
        credit: 'Christian Koch',
        creditLink: 'https://unsplash.com/photos/D_4R9CcYZOk',
        alt: 'Door'
    },
    {
        id: 2,
        title: 'project 2',
        pathURL:'assets/starbucks.jpg',
        credit: 'Lisanto 李奕良',
        creditLink: 'https://unsplash.com/photos/M6ZfUQYJneA',
        alt: 'Starbucks'
    },
    {
        id: 3,
        title: 'project 3',
        pathURL:'assets/promote.jpg',
        credit: 'Jack Church',
        creditLink: 'https://unsplash.com/photos/LZ8NzZrByts',
        alt: 'Recycle ffs'
    },
    {
        id: 4,
        title: 'project 4',
        pathURL:'assets/vibe.jpg',
        credit: 'Jon Tyson',
        creditLink: 'https://unsplash.com/photos/k2xj8AfGO7Q',
        alt: 'How I wish life was going'
    },
    {
        id: 5,
        title: 'project 5',
        pathURL:'assets/upside-down.jpg',
        credit: 'Nathan Dumlao',
        creditLink: 'https://unsplash.com/photos/bnHQf7mnee8',
        alt: 'Curious'
    },
    {
        id: 6,
        title: 'project 6',
        pathURL:'assets/skateboard.jpg',
        credit: 'Ricky Han',
        creditLink: 'https://unsplash.com/photos/xyQqPlQTcAQ',
        alt: 'Good nights'
    }
];

const project = document.querySelector('.project');
projects.forEach(function(proj){
    const link = document.createElement('a');
    link.href = proj.creditLink;
    project.appendChild(link);

    const img = document.createElement('img');
    img.src = proj.pathURL;
    img.alt = proj.alt;
    link.appendChild(img);

})