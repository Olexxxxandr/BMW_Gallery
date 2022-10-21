const photos = document.querySelectorAll('.slide');

for(const photo of photos)
{
    photo.addEventListener('click', () => {
        removeClassName();
        photo.classList.add('active');
    })
}


const removeClassName = () => {
    for(const photo of photos)
    {
        photo.classList.remove('active');
    }
}