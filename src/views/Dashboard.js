import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Doughnut } from "react-chartjs-2";

// reactstrap components
import {

  Card,
  FormGroup,
  Label,
  Input,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,

} from "variables/charts";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Performance</h5>
                      <h3>125 <span tagg="h6">users in the last 90days</span></h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Row>
                <Col lg="7">
                    <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                  </Col>
                  <Col lg="5">
                  <Doughnut
                      data={chartExample2["data"]}
                    />
                  </Col>
                </Row>  
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
          <Col lg="12" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Delete
                      </DropdownItem>
                      
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  
                  <Row>
                    <Col lg={{ size: 6, offset: 6 }}>
                      <FormGroup check>
                        <Input type="text" name="text" id="search" placeholder="Search" />
                      </FormGroup>
                    </Col>
                 </Row>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <thead>
                      <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Number of roles</th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Eze09</p>
                          </td>
                          <td>
                            <p className="title">Eze </p>
                          </td>
                          <td>
                            <p className="title">Emmanuel</p>
                          </td>
                          <td>
                            <p className="title">emereuwaonueze@gmail.com</p>
                          </td>
                          <td>
                            <p className="title">Roles</p>
                          </td>
                          <td>
                            <p className="title">3</p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
