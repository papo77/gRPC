timestamp="$(date +"%Y-%m-%d_%H-%M-%S")"
results_output_path="/Volumes/IronHide/dev/NET/grpc/MakePDF/jmeter/results/$timestamp"
report_output_path="/Volumes/IronHide/dev/NET/grpc/MakePDF/jmeter/reports/$timestamp"
echo "Results being saved to:  $results_output_path"
echo "Reports being saved to:  $report_output_path"
mkdir -p $results_output_path
mkdir -p $report_output_path
/Applications/apache-jmeter-5.6.3/bin/jmeter -n -t /Volumes/IronHide/dev/NET/grpc/MakePDF/jmeter/MakePDF.jmx -l $results_output_path/results.jtl -e -o $report_output_path