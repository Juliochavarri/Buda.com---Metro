# Buda.com---Metro
 Ruta con menor cantidad de estaciones entre dos estaciones de una red de metro.
 
 ## Formato del input de entrada: ### shortestPath(network,start,end,color)
  
### Donde network puede ser:

````javascript
const network = [
    {
        id: 0,
        name: 'A',
        color: null,
        parents: null,
        nodes: [1]
    },
    {
        id: 1,
        name: 'B',
        color: null,
        parents: [0],
        nodes: [2]
    },
    {
        id: 2,
        name: 'C',
        color: null,
        parents: [1],
        nodes: [3,6]
    },
    {
        id: 3,
        name: 'D',
        color: null,
        parents: [2],
        nodes: [4]
    },
    {
        id: 4,
        name: 'E',
        color: null,
        parents: [3],
        nodes: [5]
    },
    {
        id: 5,
        name: 'F',
        color: null,
        parents: [4,8],
        nodes: null
    },
    {
        id: 6,
        name: 'G',
        color: 'green',
        parents: [2],
        nodes: [7]
    },
    {
        id: 7,
        name: 'H',
        color: 'red',
        parents: [6],
        nodes: [8]
    },
    {
        id: 8,
        name: 'I',
        color: 'green',
        parents: [7],
        nodes: [5]
    },
]
````

