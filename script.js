const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'
];

// Helper function to remove 'a', 'an', 'the' from beginning
function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring articles
const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

// Populate the <ul> element
const ul = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
