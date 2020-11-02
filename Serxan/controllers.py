from flask import Flask, render_template
from app import app



@app.route("/")
def home():
    return render_template('home.html')

@app.route("/az/cards/debet")
def debetcard():
    return render_template('debet.html')


@app.route("/az/cards/kredit")
def creditcard():
    return render_template('credit.html')


@app.route("/az/cards/other")
def othercard():
    return render_template('more.html')





# @app.route('/students/<int:stu_index>')
# def student_list(stu_index):
#     student_Uni = list(
#         filter(lambda student: student['Id'] == stu_index, students_info))[0]
#     return render_template('studentlist.html', studentAPI=student_Uni)


# @app.route("/students/")
# def students():
#     return render_template('students.html', student_list=students_info)


# @app.route("/contact/")
# def contact():
#     form = ContactForm()
#     return render_template('contact.html',form=form)