"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

class MusicCollection {
  constructor(albums) {
    this.albums = albums;
  }

  [Symbol.iterator]() {
    let index = 0;
    let albums = this.albums;
    return {
      next() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const albums = [
  { title: "Альбом 1", artist: "Исполнитель 1", year: "2001" },
  { title: "Альбом 2", artist: "Исполнитель 2", year: "2002" },
  { title: "Альбом 3", artist: "Исполнитель 3", year: "2003" },
];

const myCollection = new MusicCollection(albums);


for (const album of myCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
