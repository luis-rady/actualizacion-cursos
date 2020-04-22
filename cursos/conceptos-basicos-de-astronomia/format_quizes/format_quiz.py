import random

kCoreInitial = """
<!-- card QUIZ -->
<div class="card">
    <div class="pdd-horizon-15 pdd-vertical-20">
        <div class="container-fluid">
            <div class="row" style="position: relative;">

                <!-- Columna izquierda de preguntas START -->
                <div class="col-md-6 pl-3 mrg-btm--50">
                    <div class=" pdd-vertical-30 pdd-horizon-25">
                        <ol>
"""

kCoreEnd = """
                        </ol>
                    </div>
                </div>
                <!-- Columna derecha de preguntas END -->

            </div>
            <div class="submitbutton">
                <button type="button" class="button" onclick="checkAll()">Revisar</button>
            </div>
            <div class="score">
                <span></span>
            </div>
            <div class="msg">
                <span></span>
            </div>
        </div>
    </div>
</div>
<!-- card QUIZ -->
"""

kFirstColumnEnd = """
                        </ol>
                    </div>
                </div>
                <!-- Columna izquierda de preguntas END -->
"""

kSecondColumnBegin = """
                <!-- Columna derecha de preguntas START -->
                <div class="col-md-6 pl-3 mrg-btm-50">
                    <div class="pdd-vertical-30 pdd-horizon-25">
                        <ol start="{}">
"""

kQuestionBegin = """
                            <!-- Pregunta {} START -->
                            <li class="question">
                                <p>{}</p>

                                <b class='alertWrong' style="display: none; color:red">
                                    Respuesta equivocada, vuélvelo a intentar.
                                </b>
                                <b class='alertCorrect' style="display: none; color:green">
                                    ¡Respuesta correcta!
                                </b>

                                <div class="row">
                                    <div class="pl-3">
"""

kQuestionEnd = """
                                    </div>
                                </div>


                            </li>
                            <!-- Pregunta {} END -->
"""

kAnswer = """
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input{}"
                                                class="option">
                                            <label class="custom-control-label"
                                                for="U13_Q{}_A{}">{}</label>
                                        </div>
"""

kCorrectAnswer = " option correct"

def WriteToFileAnswers(output_file, parsed_answers):
    random.shuffle(parsed_answers)
    for parsed_answer in parsed_answers:
        output_file.write(parsed_answer)

def ParseAnswers(output_file, input_file_data, current_line, total_lines, question_number):
    answer_num = 1
    parsed_answers = list()
    while current_line < total_lines:
        splitted_line = input_file_data[current_line].split(".", 1)
        if(len(splitted_line) > 1 and splitted_line[0].isdigit()):
            current_line -= 1
            break
        elif(input_file_data[current_line].strip()):
            if(answer_num == 1):
                parsed_answers.append(kAnswer.format(kCorrectAnswer, question_number, answer_num, input_file_data[current_line].lstrip().rstrip()))
            else:
                parsed_answers.append(kAnswer.format("", question_number, answer_num, input_file_data[current_line].lstrip().rstrip()))
            answer_num += 1
        current_line += 1
    WriteToFileAnswers(output_file, parsed_answers)
    return current_line

def MaybeNextColumn(output_file, question_number, total_questions):
    if(total_questions%2 == 0 and question_number*2 == total_questions):
        output_file.write(kFirstColumnEnd)
        output_file.write(kSecondColumnBegin.format(question_number+1))
    elif(total_questions%2 == 1 and question_number*2 == total_questions-1):
        output_file.write(kFirstColumnEnd)
        output_file.write(kSecondColumnBegin.format(question_number+1))

def ParseQuestionWithAnswer(output_file, input_file_data, current_line, total_lines, splitted_line, total_questions):
    question_number, question_text = splitted_line
    question_number = int(question_number)
    output_file.write(kQuestionBegin.format(question_number, question_text.lstrip().rstrip()))
    current_line += 1
    current_line = ParseAnswers(output_file, input_file_data, current_line, total_lines, question_number)
    output_file.write(kQuestionEnd.format(question_number))
    MaybeNextColumn(output_file, question_number, total_questions)
    return current_line



def ParseFile():
    input_file = open("input_file.txt", "r", encoding='utf-8')    # Open the file for reading only.
    output_file = open("output_file.txt", "w", encoding='utf-8')
    output_file.write(kCoreInitial)
    total_questions = int(input_file.readline())
    input_file_data = input_file.readlines()
    current_line = 1
    total_lines = len(input_file_data)
    while current_line < total_lines:
        splitted_line = input_file_data[current_line].split(".", 1)
        if(len(splitted_line) == 2):
            current_line = ParseQuestionWithAnswer(output_file, input_file_data, current_line, total_lines, splitted_line, total_questions)
        current_line += 1 

    
    output_file.write(kCoreEnd)
    input_file.close()
    output_file.close()


if __name__ == "__main__":
    ParseFile()