// js/scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Adicione scripts interativos aqui, se necessário
});
function desativarLinksEmTodosOsTbody() {
    // Seleciona todos os tbodys na página
    const tbodys = document.querySelectorAll('tbody');
  
    // Itera sobre todos os tbodys encontrados
    tbodys.forEach(tbody => {
      // Seleciona todos os links dentro do tbody atual
      const links = tbody.querySelectorAll('a');
  
      // Itera sobre todos os links encontrados dentro do tbody atual
      links.forEach(link => {
        // Desativa o link
        link.style.pointerEvents = 'none';
        link.style.color = '#';
      });
    });
  }
  
  // Chama a função para desativar todos os links dentro de todos os tbodys após o carregamento da página
  document.addEventListener('DOMContentLoaded', () => {
    desativarLinksEmTodosOsTbody();
  });
  
  
  
  
  
  