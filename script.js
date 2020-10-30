function chess () {
    let chessBoard = document.querySelector('.chessboard');
    
    let flag = true;

    let fig = {
        0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-40px -16px','-372px -17px', '-484px -22px','-263px -19px'],
        1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
        6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
        7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-40px -116px','-372px -116px', '-484px -116px','-263px -116px'],
    };

    for (i=0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (j == 0) {
                flag = !flag;
            }

            let block = document.createElement('div');

            if (flag) {
                block.className = 'block black';
            } else {
                block.className = 'block white';
            }
            if (fig[i]!==undefined && fig[i][j]!==undefined){
                block.style.backgroundImage = 'url(figures.png)';
                block.style.backgroundPosition = fig[i][j];
            }

            chessBoard.appendChild(block);
            flag = !flag;
        }
    }
}

chess ();