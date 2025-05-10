function assignmentAndDeclaration() {


    // ** Var Variable **

    // Redeclaration

    try {
        eval('var a = 10; var a = 20')  
        document.write('Var Re-declaration is Successfull<br>')
    } catch (error) {
        document.write('Var Re-declaration is Unsuccessfull<br>')
    }

    // Reassignment
    try {
        eval('var a = 10; a = 20')  
        document.write('Var Re-assignment is Successfull<br>')
    } catch (error) {
        document.write('Var Re-assignment is Unsuccessfull<br>')
    }

    // ** Let Variable **
    
    // Redeclaration

    try {
        eval('let b = 10; let b = 20')  
        document.write('Let Re-declaration is Successfull<br>')
    } catch (error) {
        document.write('Let Re-declaration is Unsuccessfull<br>')
    }

    // Reassignment
    try {
        eval('let b = 10; b = 20')  
        document.write('Let Re-assignment is Successfull<br>')
    } catch (error) {
        document.write('<br>Let Re-assignment is Unsuccessfull<br>')
    }


    // ** Const Variable **

    // Redeclaration

    try {
        eval('const c = 10; c = 20') 
        document.write('Const Re-declaration is Successfull<br>')
    } catch (error) {
        document.write('Const Re-declaration is Unsuccessfull<br>')
    }

    // Reassignment
    try {
        eval('const c = 10; c = 20') 
        document.write('Const Re-assignment is Successfull<br>')
    } catch (error) {
        document.write('Const Re-assignment is Unsuccessfull<br>')
    }
}