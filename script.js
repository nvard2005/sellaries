function createFadeObserver({
  selector,
  threshold = 0.3,
  baseDelay = 0,
  stepDelay = 200
}) {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
          entry.target.style.setProperty('--delay', '0ms');
        }
      });
    },
    { threshold }
  );

  items.forEach((item, index) => {
    item.style.setProperty('--delay', `${baseDelay + index * stepDelay}ms`);
    observer.observe(item);
  });
}

createFadeObserver({
  selector: '.mission-vision .fade-up',
  threshold: 0.4,
  stepDelay: 300
});

createFadeObserver({
  selector: '.excellence .fade-up'
});

createFadeObserver({
  selector: '.about-us .fade-up'
});

createFadeObserver({
  selector: '.key-products .fade-up'
});

createFadeObserver({
  selector: '.our-team .fade-up'
});

createFadeObserver({
  selector: '.servicess .fade-up'
});

createFadeObserver({
  selector: '.our-service-info h3'
});


const hubSection = document.querySelector('.hub-features');
const hubLine = document.querySelector('.hub-line');
const heading = document.querySelector('.dubai-hub');

if (hubSection && hubLine && heading) {
  const hubObserver = new IntersectionObserver(
    ([entry]) => {
      hubLine.classList.toggle('draw', entry.isIntersecting);
      heading.classList.toggle('show', entry.isIntersecting);
    },
    { threshold: 0.4 }
  );

  hubObserver.observe(hubSection);
}

const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  });
}
