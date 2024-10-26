// แบบดูรูปเฉยๆ
// PopUp Function

document.querySelectorAll('.profile-about img ').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});




document.querySelectorAll('.Picture .image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.transcription .image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.certificate .image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.activity .image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});





document.querySelectorAll('.work-explain-result .image-result img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.idea-box .ex-image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.example-image .ex-image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});

document.querySelectorAll('.fullCode .ex-image img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.PopUp2').style.display = 'block';
        document.querySelector('.PopUp2 img').src = Image.getAttribute('src');}
});




// Close Button

document.querySelector('.PopUp2 span').onclick = () => {
    document.querySelector('.PopUp2').style.display = 'none';
}


