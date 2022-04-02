import logo from './logo.svg';

function component() {
 let m = document.createElement('main');
 let p = document.createElement('p')   ;
 let img = document.createElement('img');
 m.append(p)
 p.append(img)
 img.src = logo;
 img.alt - 'sample logo';
 return m;
}

// this^ is really cool.  All you have to do is return m, and it adds 
// lots of stuff to the html.

export default component;