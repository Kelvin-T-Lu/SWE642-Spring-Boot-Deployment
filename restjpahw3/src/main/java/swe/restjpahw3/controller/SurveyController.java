package swe.restjpahw3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import swe.restjpahw3.model.Survey;
import swe.restjpahw3.service.SurveyService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/surveys")
public class SurveyController {

    private final SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        super();
        this.surveyService = surveyService;
    }

    // Endpoint for survey submission --> this might change later
    @PostMapping("/survey_display")
    public ResponseEntity<String> submitSurvey(@RequestBody Survey survey) {
        try {
            // Call the service to save the survey data in the database
            surveyService.submitSurvey(survey);
            return ResponseEntity.status(HttpStatus.CREATED).body("Survey submitted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit the survey.");
        }
    }

    // Endpoint for retrieving all surveys
    @GetMapping("/survey_page")
    public ResponseEntity<List<Survey>> getAllSurveys() {
        List<Survey> surveys = surveyService.getAllSurveys();
        if (surveys.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(surveys);
    }

    // End point for delete
    // @DeleteMapping("/{id}")
    // public ResponseEntity<String> deleteSurvey(@PathVariable Long id) {
    //     boolean surveyDeleted = surveyService.deleteSurvey(id);

    //     if (surveyDeleted) {
    //         return new ResponseEntity<String>("Survey deleted successfully!", HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<String>("Survey with ID " + id + " not found.", HttpStatus.NOT_FOUND);
    //     }
    // }
}
