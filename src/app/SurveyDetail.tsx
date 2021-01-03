import { Survey, SurveyDetail } from '../components/survey/Survey';
const mockSurveyData = require('../mockSurveyData.json');
const mockSurveyQuestions = require('../mockQuestionData.json');

export function SurveyDetailPage() {
    const survey: Survey = mockSurveyData[0];
    survey.questions = mockSurveyQuestions;
    
    return (
        <div>
            <SurveyDetail survey={survey}></SurveyDetail>
        </div>
    );
}