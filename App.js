function total() {
    const a = document.getElementById('sem1').value;
    const b = document.getElementById('sem3').value;
    const c = document.getElementById('sem4').value;
    const d = document.getElementById('sem5').value;
    const e = document.getElementById('it').value;
    const sem1 = parseInt(a);
    const sem3 = parseInt(b);
    const sem4 = parseInt(c);
    const sem5 = parseInt(d);
    const it = parseInt(e);
    const f = sem1 / 4;
    const total1 = parseFloat(f);
    const total = total1 + sem3 + sem4 + sem5 + it;
    const percentage = (total / 3250) * 100;
    var total_gained_percentage = parseFloat(percentage).toFixed(2);
    document.getElementById('total').innerText = total_gained_percentage;
}

