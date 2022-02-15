function solve() {

   let section = document.querySelector('main').children[0];

   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category')
   let content = document.getElementById('content')

   let createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', create);

   let ol = document.querySelector('ol');

   function create(e) {
      e.preventDefault();

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = title.value;

      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;
      pCategory.appendChild(strongCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';
      let strongContent = document.createElement('strong');
      strongContent.textContent = author.value;
      pCreator.appendChild(strongContent);

      let pContent = document.createElement('p');
      pContent.textContent = content.value;

      let div = document.createElement('div');
      div.className = 'buttons';

      let deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', del)

      let archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', archive)

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);

      section.appendChild(article);

      author.value = ''
      title.value = ''
      category.value = ''
      content.value = ''
   }

   function del(e) {
      let article = e.currentTarget.parentNode.parentNode;
      section.removeChild(article);
   }

   function archive(e) {
      let h1 = e.currentTarget.parentNode.parentNode.children[0].textContent;
      let li = document.createElement('li');
      li.textContent = h1;
      ol.appendChild(li);

      Array.from(ol.querySelectorAll('li'))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => ol.appendChild(li));

      let article = e.currentTarget.parentNode.parentNode;
      section.removeChild(article);
   }


}
