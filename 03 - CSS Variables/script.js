

const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {


    //console.log(this.value);
    const suffix = this.dataset.sizing || '';
    //console.log(suffix);
    //console.log(this.name);
    /*
     * documentElement.style accesses the whole style as it seems,
     * not just the localy embedded style in <style></style> Tags
     * (my css is located in a separate file.
     *
        * */
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( input => input.addEventListener('change', handleUpdate));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdate));
