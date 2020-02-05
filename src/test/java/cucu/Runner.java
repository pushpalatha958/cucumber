package cucu;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature\\File.feature",
                   glue="cucu",
                   plugin="html:target/htmlreport")

public class Runner {

}
