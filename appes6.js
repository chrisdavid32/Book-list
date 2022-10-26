class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(){
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

    showAlert(){
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

    deleteBook(){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
         document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
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
