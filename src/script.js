/* Wait for DOM to be fully loaded */
document.addEventListener('DOMContentLoaded', function() {
  /* DOM element references */
  const filterButtons = document.querySelectorAll('.filter');
  const courseCards = document.querySelectorAll('.course-card');
  const searchInput = document.querySelector('.search__input');
  const loadMoreButton = document.querySelector('.load-more__button');
  const coursesContainer = document.querySelector('.courses');

  /* Check if all required elements exist */
  if (!filterButtons.length || !courseCards.length || !searchInput || !loadMoreButton || !coursesContainer) {
    console.error('Required DOM elements not found');
    return;
  }

  /* Create no results message */
  const noResultsMessage = document.createElement('div');
  noResultsMessage.className = 'no-results';
  noResultsMessage.textContent = 'No courses found. Try another search or filter.';
  coursesContainer.appendChild(noResultsMessage);

  /* State variables */
  let activeFilter = 'all';
  let searchQuery = '';

  /* Initial display update */
  updateCourseDisplay();

  /* Filter button event listeners */
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      /* Remove active class from all buttons */
      filterButtons.forEach(btn => {
        btn.classList.remove('filter--active');
      });

      /* Add active class to clicked button */
      this.classList.add('filter--active');

      /* Update active filter */
      activeFilter = this.dataset.category;

      /* Update display */
      updateCourseDisplay();
    });
  });

  /* Search input event listener */
  searchInput.addEventListener('input', function() {
    searchQuery = this.value.trim().toLowerCase();
    updateCourseDisplay();
  });

  /* Load more button event listener */
  loadMoreButton.addEventListener('click', function() {
    alert('In a real application, this would load more courses');
  });

  /* Function to update course display based on filter and search */
  function updateCourseDisplay() {
    let visibleCardsCount = 0;

    courseCards.forEach(card => {
      const category = card.dataset.category;
      const titleElement = card.querySelector('.course-card__title');
      const authorElement = card.querySelector('.course-card__author');

      if (!titleElement || !authorElement) return;

      const title = titleElement.textContent.toLowerCase();
      const author = authorElement.textContent.toLowerCase();

      /* Check if card matches active filter */
      const matchesFilter = activeFilter === 'all' || category === activeFilter;

      /* Check if card matches search query */
      const matchesSearch = !searchQuery ||
        title.includes(searchQuery) ||
        author.includes(searchQuery);

      /* Show or hide card based on matches */
      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        card.classList.add('visible');
        visibleCardsCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });

    /* Show/hide no results message */
    if (visibleCardsCount === 0) {
      noResultsMessage.classList.add('active');
    } else {
      noResultsMessage.classList.remove('active');
    }
  }

  /* Debounced search for better performance */
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = this.value.trim().toLowerCase();
      updateCourseDisplay();
    }, 300);
  });
});