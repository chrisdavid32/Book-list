// book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){

}

// add book to list 
UI.prototype.addBookToList = function(book){
   const list = document.getElementById('book-list');

//    create tr element 
   const row = document.createElement('tr');
   row.innerHTML = `
   <td>${book.title}</d>
   <td>${book.author}</d>
   <td>${book.isbn}</d>
   <td><a href="#" class="delete">X</a></td>
   `;
   list.appendChild(row);
}

// show alert 
UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // timeout after 3 sec 

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // get form value 
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
    //   instantiate book 
    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('please fill in all fields', 'error');
    }else{
        ui.addBookToList(book);
        ui.showAlert('Book Added!', 'success');
        ui.clearFields();
    }
   
e.preventDefault();
});

// Event listener for delete 
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);

    ui.showAlert('Book removed', 'success');
e.preventDefault();

})