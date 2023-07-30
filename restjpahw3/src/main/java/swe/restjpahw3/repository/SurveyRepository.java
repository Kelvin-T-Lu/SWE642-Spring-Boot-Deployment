package swe.restjpahw3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import swe.restjpahw3.model.*;

public interface SurveyRepository extends JpaRepository<Survey, Long> {

}
