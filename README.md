#  Autocompleter
Autocompleter is a web application that demonstrates the use of trie data structure for dictionary autocompletion. The main objective of this project is to provide a fast and efficient solution for dictionary autocompletion. 
## About Trie Data Structure
A trie is a data structure that represents a collection of strings. It consists of nodes that are connected to each other through edges. Each node in the trie represents a prefix of one or more strings. The root of the trie represents an empty string. Each edge of the trie is labeled with a character, and the edges leaving a node represent all the possible characters that can follow the prefix represented by that node.

**Deployed site:** [Autocompleter](https://autocompleter.cyclic.app/)

![Mockup of the site](https://user-images.githubusercontent.com/75395761/235497651-2405ec2f-4392-49ea-874d-89f9b66da5e5.jpg)

# Getting Started 
### Prerequisites
To run this project, you need Node.js and npm installed on your system.

### Installing
* Clone or download the project repository to your local machine.
* Install the dependencies by running the following `npm install` for server as well for client  
* After running `npm run start` the server page will be available at `localhost:5000`
* To start the Node.js server, run the following command: `npm run start` or `npm run server` (to use nodemon) 
* After this steps the app will be available on `localhost:5000` 

# How It's Made:

**Tech used:** HTML, CSS, TypeScript, React, Node.js (Express.js) 

The web application loads a dictionary file on the server side by fetching it from local dictionary .txt file, containing a list of words, then the data is sent as json to client and loaded to trie data structure. As the user types a query into the search bar, the application finds all the words in the dictionary that match the prefix of the query. It then displays the list of matching words as suggestions for autocompletion. As lists results can grow rapidly they are rendered using virtualization. To achieve this, the application divides the search results into smaller chunks, and use React-Window to only renders the chunks that are currently visible on the screen. As the user scrolls through the list, React-Window dynamically renders new chunks and removes the ones that are no longer needed, which ensures that the application remains fast and responsive even for large result lists.

### Features 

* This web application allows users to add words to the dictionary without modifying any local files. The added words are stored temporarily in the application's state, which means they will be lost once the application is closed. This feature allows users to experiment with the application without worrying about accidentally modifying the original dictionary file.
* The application uses React-Window to render large lists of search results efficiently. It allows to only renders the visible portion of a long list, which improves performance by reducing the number of DOM nodes that need to be created and updated. This makes the application more responsive, even when displaying a large number of search results.

## Lessons Learned:

This project has taught me the importance of writing efficient algorithms when dealing with large data sets. In particular, it has highlighted the benefits of using a trie data structure for dictionary autocompletion, which allows for fast and efficient searches even when dealing with thousands of words.
Furthermore, I have learned about the importance of rendering large data sets in a way that does not cause lag in the DOM. By using React-Window to virtualize the rendering of search results, I was able to improve the performance of the application and provide a smooth user experience even when dealing with large result lists.
Overall, this project has demonstrated the importance of considering both algorithmic efficiency and rendering performance when building applications that deal with large data sets. By taking these factors into account, I can build applications that are both fast and responsive, providing a better user experience.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Interactive Linear Regression using Tensorflow.js:** https://github.com/Frosenow/Learning-Tensorflowjs

**Image Processing in Python using CUDA with Numba:** https://github.com/Frosenow/Numba-GPU-Image-Processing

**Locatobia - Guide for busy tourists**: https://github.com/Frosenow/Locatobia

