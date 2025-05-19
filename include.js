async function includeHTML(callback) {
  const elements = document.querySelectorAll('[data-include]');
  let remaining = elements.length;

  if (remaining === 0 && typeof callback === 'function') {
    callback();
    return;
  }

  for (const el of elements) {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (response.ok) {
        el.innerHTML = await response.text();
      } else {
        el.innerHTML = 'Файл не найден: ' + file;
      }
    } catch (err) {
      el.innerHTML = 'Ошибка загрузки: ' + file;
    }

    remaining--;

    if (remaining === 0 && typeof callback === 'function') {
      callback();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML(() => {
    // Здесь можно вызывать любые функции, зависящие от хедера и футера
    console.log('Все include-файлы загружены');
  });
});

