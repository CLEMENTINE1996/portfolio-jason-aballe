import React from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Badge 
} from 'reactstrap';

const ProjectModal = ({ isOpen, toggle, project }) => {
  if (!project) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      toggle={toggle} 
      centered 
      size="lg"
      contentClassName="custom-modal-style"
    >
      <ModalHeader toggle={toggle} className="border-0">
        <h3 className="mb-0">{project.name}</h3>
      </ModalHeader>
      
      <ModalBody>
        <div className="mb-4">
          <h5 className="text-primary">Project Description</h5>
          <p className="text-muted">{project.desc}</p>
        </div>

        {project.tools && (
          <div className="mb-4">
            <h5 className="text-primary">Tools & Technologies</h5>
            <div className="d-flex flex-wrap">
              {project.tools.split(',').map((tool, i) => (
                <Badge key={i} color="info" pill className="mr-2 mb-2 p-2">
                  {tool.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </ModalBody>

      <ModalFooter className="border-0">
        {project.link && project.link !== "#" && (
          <Button color="primary" href={project.link} target="_blank">
            Live Demo
          </Button>
        )}
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProjectModal;