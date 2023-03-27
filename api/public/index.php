<?php
// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');

// Additional headers which may be sent along with the CORS request
// The X-Requested-With header allows jQuery requests to go through
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');
// header('Access-Control-Allow-Origin: *');

// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

// header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
// header('Access-Control-Max-Age: 86400');
use App\Models\Db;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;



require_once __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();


// START API

//_________________________________________HOME____________________________________________
$app->get('/', function (Request $request, Response $response) {
   $response->getBody()->write('BIENVENUE SUR E-MEDICAL');
   return $response;
});


//_________________________________SELECT_ADMINISTRATEUR___________________________________
$app->get('/administrateur/all', function (Request $request, Response $response) {
    $sql = "SELECT * FROM administrateur order by id DESC";
   
    try {
      $db = new Db();
      $conn = $db->connect();
      $stmt = $conn->query($sql);
      $administrateur = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
     
      $response->getBody()->write(json_encode($administrateur));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });
   $app->get('/administrateur/all/one', function (Request $request, Response $response) {

    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM administrateur  WHERE id = $id ";
   
    try {
      $db = new Db();
      $conn = $db->connect();
      $stmt = $conn->query($sql);
      $administrateur = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
     
      $response->getBody()->write(json_encode($administrateur));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });


//_________________________________SEARCH_ADMINISTRATEUR___________________________________
$app->post('/administrateur/search', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $administrateur = json_decode($data, true);

  $nom = $administrateur['nom'];


  $sq = "SELECT * FROM administrateur WHERE nom LIKE '%:nom%' ";


  $sql = "INSERT INTO administrateur(nom, email, password) VALUES (:nom, :email, :password)";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':email',$email);
    $q->bindParam(':password',$password);

    $stmt = $q->execute();
    
    $res = [
      'message' => "Enregistrement avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });
//_________________________________INSERT_ADMINISTRATEUR___________________________________
$app->post('/administrateur/add', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $administrateur = json_decode($data, true);

  $nom = $administrateur['nom'];
  $email = $administrateur['email'];
  $password = $administrateur['password'];
  
  // Vérification du nom
  if (empty($nom)) {
    $res = [      'message' => "Le nom de l'administrateur est obligatoire",      "status" => 400    ];
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(400);
  }
  
  // Vérification de l'adresse e-mail
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $res = [      'message' => "L'adresse e-mail n'est pas valide",   "status" => 400    ];
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(400);
  }

  // Vérification de l'existence de l'email dans la base de données
  $sql_email = "SELECT email FROM administrateur WHERE email = :email";
  try {
    $db = new Db();
    $conn = $db->connect();
   
    $q = $conn->prepare($sql_email);
    $q->bindParam(':email',$email, PDO::PARAM_STR);
    $q->execute();

    $result = $q->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) > 0) {
      $res = [        'message' => "L'adresse e-mail existe déjà dans la base de données",        "status" => 409      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(409);
    }

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );

    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
  
  // Vérification du mot de passe
  if (!preg_match('/[a-zA-Z0-9]/', $password)) {
    $res = [      'message' => "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial et avoir une longueur minimale de 8 caractères",      "status" => 400    ];
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(400);
  }
  
  // Insertion dans la base de données
  $sql = "INSERT INTO administrateur(nom,email, password) VALUES (:nom, :email, :password )";
 
  try {
    $db = new Db();
    $conn = $db->connect();
   
    $q = $conn->prepare($sql);
    $q->bindParam(':nom', $nom, PDO::PARAM_STR);
    $q->bindParam(':email', $email, PDO::PARAM_STR);
    $q->bindParam(':password', $password, PDO::PARAM_STR);
    $stmt = $q->execute();
    
    $res = [
      'message' => "Voter compte a été crée avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });
 //_________________________________LOGIN_ADMINISTRATEUR___________________________________
$app->post('/administrateur/login', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  $administrateur = json_decode($data, true);
  $email = $administrateur['email'];
  $password = $administrateur['password'];

  // Vérification de l'adresse e-mail
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $res = [
      'message' => "L'adresse e-mail n'est pas valide",
      "status" => 400
    ];
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(400);
  }

  // Vérification de l'existence de l'email et du mot de passe dans la base de données
  $sql = "SELECT * FROM administrateur WHERE email = :email AND password = :password";
  try {
    $db = new Db();
    $conn = $db->connect();
   
    $q = $conn->prepare($sql);
    $q->bindParam(':email', $email, PDO::PARAM_STR);
    $q->bindParam(':password', $password, PDO::PARAM_STR);
    $q->execute();

    $result = $q->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) == 0) {
      $res = [
        'message' => "L'adresse e-mail et/ou le mot de passe est incorrect",
        "status" => 401
      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(401);
    } else {
      // Génération de la session et envoi de la réponse
      $token = bin2hex(random_bytes(32));
      $_SESSION['token'] = $token;
      $_SESSION['id'] = $result[0]['id'];
      $res = [
        'message' => "Login réussi",
        "status" => 200,
        "token" => $token
      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    }

  } catch (PDOException $e) {
    $error = [
      "message" => $e->getMessage()
    ];

    $response->getBody()->write(json_encode($error));
    return $response
    ->withHeader('content-type', 'application/json')
    ->withStatus(500);
}
});
//_________________________________LOGOUT_ADMINISTRATEUR___________________________________
$app->post('/administrateur/logout', function (Request $request, Response $response) {
  // Destruction de la session
  session_start();
  session_destroy();

  $res = [        'message' => "Vous êtes maintenant déconnecté",        "status" => 200    ];

  $response->getBody()->write(json_encode($res));
  return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
});
//________________________________UDATE_ADMINISTRATEUR_____________________________________
$app->put('/administrateur/edit/{id}', function (Request $request, Response $response) {
  
  $id = $request->getAttribute('id');
  $data = $request->getBody()->getContents();

  $administrateur = json_decode($data, true);

  $nom = $administrateur['nom'];
  $email = $administrateur['email'];
  $password = $administrateur['password'];

  $sql = "UPDATE administrateur 
  SET 
  nom = :nom, 
  email = :email, 
  password = :password 
  WHERE id = :id";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':id',$id);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':email',$email);
    $q->bindParam(':password',$password);

    
    $stmt = $q->execute();
    
    $res = [
      'message' => "Information de l'administrateur modifier avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });
 //_________________________________DELETE ADMINISTRATEUR___________________________________
$app->delete('/administrateur/delete/{id}', function (Request $request, Response $response, array $args) {
  $id = $args['id'];
  $id = $request->getAttribute('id');

  $sql = "DELETE FROM administrateur WHERE id = ". $id;
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $stmt = $q->execute();
    
    $res = [
      'message' => "Administrateur supprimé avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });



 //__________________________________________PATIENT________________________________________
 //_______________________________________SELECT_PATIENT____________________________________
 $app->get('/patient/all', function (Request $request, Response $response) {
  $sql = "SELECT * FROM patient order by id DESC";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $stmt = $conn->query($sql);
    $patient = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
   
    $response->getBody()->write(json_encode($patient));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });
 

//_______________________________INSCRIPTION_PATIENT____________________________________
  $app->post('/patient/add', function (Request $request, Response $response) {
  
    $data = $request->getBody()->getContents();
    
    $patient = json_decode($data, true);
  
    $nom = $patient['nom'];
    $prenom = $patient['prenom'];
    $datenaiss = $patient['datenaiss'];
    $contact = $patient['contact'];
    $password = $patient['password'];
    
      
    // Insertion dans la base de données
    $sql = "INSERT INTO patient(nom,prenom, dateNaiss, contact, password) VALUES (:nom, :prenom, :datenaiss, :contact, :password )";
   
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $q = $conn->prepare($sql);
      $q->bindParam(':nom', $nom, PDO::PARAM_STR);
      $q->bindParam(':prenom', $prenom, PDO::PARAM_STR);
      $q->bindParam(':datenaiss', $datenaiss, PDO::PARAM_STR);
      $q->bindParam(':contact', $contact, PDO::PARAM_STR);
      $q->bindParam(':password', $password, PDO::PARAM_STR);
      $stmt = $q->execute();
      
      $res = [
        'message' => "patient  crée avec succes",
        "status" => 200
      ];
      $db = null;
     
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
  
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });
   //____________________________________LOGIN_PATIENT____________________________________
   $app->post('/patient/login', function (Request $request, Response $response) {
    $data = $request->getBody()->getContents();
    $patient = json_decode($data, true);
    $contact = $patient['contact'];
    $password = $patient['password'];
  
    // Vérification du numéro de téléphone
    if (!preg_match('/^\d+/', $contact)) {
      $res = [
        'message' => "Le numéro de téléphone n'est pas valide",
        "status" => 400
      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(400);
    }
  
    // Vérification de l'existence du numéro de téléphone et du mot de passe dans la base de données
    $sql = "SELECT * FROM patient WHERE contact = :contact AND password = :password";
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $q = $conn->prepare($sql);
      $q->bindParam(':contact', $contact, PDO::PARAM_STR);
      $q->bindParam(':password', $password, PDO::PARAM_STR);
      $q->execute();
  
      $result = $q->fetchAll(PDO::FETCH_ASSOC);
  
      if (count($result) == 0) {
        $res = [
          'message' => "Le numéro de téléphone et/ou le mot de passe est incorrect",
          "status" => 401
        ];
        $response->getBody()->write(json_encode($res));
        return $response
          ->withHeader('content-type', 'application/json')
          ->withStatus(401);
      } else {
        // Génération de la session et envoi de la réponse
        $token = bin2hex(random_bytes(32));
        $_SESSION['token'] = $token;
        $_SESSION['id'] = $result[0]['id'];
        $res = [
          'message' => "Login réussi",
          "status" => 200,
          "token" => $token
        ];
        $response->getBody()->write(json_encode($res));
        return $response
          ->withHeader('content-type', 'application/json')
          ->withStatus(200);
      }
  
    } catch (PDOException $e) {
      $error = [
        "message" => $e->getMessage()
      ];
  
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
  });
  

  //_____________________________________LOGOUT_PATIENT____________________________________
  $app->post('/patient/logout', function (Request $request, Response $response) {
    // Destruction de la session
    session_start();
    session_destroy();
  
    $res = ['message' => "Vous êtes maintenant déconnecté", 
    "status" => 200 ];
  
    $response->getBody()->write(json_encode($res));
    return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
  });

 
//________________________________________UPDATE_PATIENT_____________________________________
$app->put('/patient/edit/{id}', function (Request $request, Response $response) {
  
  $id = $request->getAttribute('id');
  $data = $request->getBody()->getContents();

  $patient = json_decode($data, true);

  $nom = $patient['nom'];
  $prenom = $patient['prenom'];
  $datenaiss = $patient['datenaiss'];
  $contact = $patient['contact'];
  $password = $patient['password'];

  $sql = "UPDATE patient 
  SET 
  nom = :nom, 
  prenom = :prenom, 
  datenaiss = :datenaiss,
  contact = :contact,
  password = :password

  WHERE id = :id";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':id',$id);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':prenom',$prenom);
    $q->bindParam(':datenaiss',$datenaiss);
    $q->bindParam(':contact',$contact);
    $q->bindParam(':password',$password);

    
    $stmt = $q->execute();
    
    $res = [
      'message' => "Votre compte a été modifié avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });


//_____________________________________DELETE_PATIENT____________________________________

$app->delete('/patient/delete/{id}', function (Request $request, Response $response, array $args) {
  $id = $args['id'];
  $id = $request->getAttribute('id');

  $sql = "DELETE FROM patient WHERE id = ". $id;
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $stmt = $q->execute();
    
    $res = [
      'message' => "Patient supprimé avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });





//_________________________________________MEDECIN_________________________________________

//________________________________________SELECT_MEDECIN_____________________________________
$app->get('/medecin/all', function (Request $request, Response $response) {
  $sql = "SELECT * FROM medecin order by id DESC";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $stmt = $conn->query($sql);
    $medecin = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
   
    $response->getBody()->write(json_encode($medecin));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });



 $app->get('/medecin/one/{id}', function (Request $request, Response $response) {

  $id = $request->getAttribute('id');
  $sql = "SELECT * FROM medecin  WHERE id = $id ";
  // die('idi');
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $stmt = $conn->query($sql);
    $administrateur = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
   
    $response->getBody()->write(json_encode($administrateur));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });




//______________________________________INSERT_MEDICIN___________________________________________
$app->post('/medecin/add', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $medecin = json_decode($data, true);

  $nom = $medecin['nom'];
  $prenom = $medecin['prenom'];
  $specialite = $medecin['specialite'];
  $contact = $medecin['contact'];
  $password = $medecin['password'];


  $sql = "INSERT INTO medecin(nom,prenom,specialite,contact,password) VALUES (:nom, :prenom, :specialite, :contact, :password)";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':prenom',$prenom);
    $q->bindParam(':specialite',$specialite);
    $q->bindParam(':contact',$contact);
    $q->bindParam(':password',$password);

    $stmt = $q->execute();
    
    $res = [
      'message' => "Medecin enregistré avec succes",
      "status" => 200
    ];
    $db = null;
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });
//_________________________________________LOGIN_MEDECIN__________________________________________
$app->post('/medecin/login', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  $medecin = json_decode($data, true);

  $contact = $medecin['contact'];
  $password = $medecin['password'];

  $sql = "SELECT * FROM medecin WHERE contact = :contact AND password = :password";

  try {
    $db = new Db();
    $conn = $db->connect();
   
    $q = $conn->prepare($sql);
    $q->bindParam(':contact', $contact, PDO::PARAM_STR);
    $q->bindParam(':password', $password, PDO::PARAM_STR);
    $q->execute();

    $result = $q->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) == 0) {
      $res = [
        'message' => "contact et/ou mot de passe incorrect",
        "status" => 401
      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(401);
    } else {
      // Génération de la session et envoi de la réponse
      $token = bin2hex(random_bytes(32));
      $_SESSION['token'] = $token;
      $_SESSION['id'] = $result[0]['id'];
      $res = [
        'message' => "Connexion réussie",
        "status" => 200,
        "token" => $token
      ];
      $response->getBody()->write(json_encode($res));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    }

  } catch (PDOException $e) {
    $error = [
      "message" => $e->getMessage()
    ];

    $response->getBody()->write(json_encode($error));
    return $response
    ->withHeader('content-type', 'application/json')
    ->withStatus(500);
  }
});


//_______________________________________LOGOUT_MEDECIN_______________________________________________
$app->post('/medecin/logout', function (Request $request, Response $response) {
  // Destruction de la session
  session_start();
  session_destroy();

  $res = ['message' => "Vous êtes maintenant déconnecté", 
  "status" => 200 ];

  $response->getBody()->write(json_encode($res));
  return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
});


//_________________________________________UPDATE__________________________________________
$app->put('/medecin/edit/{id}', function (Request $request, Response $response) {
  
  $id = $request->getAttribute('id');
  $data = $request->getBody()->getContents();

  $medecin = json_decode($data, true);
  $nom = $medecin['nom'];
  $prenom = $medecin['prenom'];
  $specialite = $medecin['specialite'];
  $contact = $medecin['contact'];
  $password = $medecin['password'];

  $sql = "UPDATE medecin 
  SET 
  nom = :nom, 
  prenom = :prenom, 
  specialite = :specialite,
  contact = :contact,
  password = :password

  WHERE id = :id";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':id',$id);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':prenom',$prenom);
    $q->bindParam(':specialite',$specialite);
    $q->bindParam(':contact',$contact);
    $q->bindParam(':password',$password);

    
    $stmt = $q->execute();
    
    $res = [
      'message' => "Information de medecin modifiée avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });



 //___________________________________________RDV__________________________________________

 //________________________________________SELECT_RDV__________________________________________
 $app->get('/rdv/all', function (Request $request, Response $response) {
  $sql = "SELECT * FROM rdv order by id ASC";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $stmt = $conn->query($sql);
    $rdv = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
   
    $response->getBody()->write(json_encode($rdv));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);
  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });



//_______________________________________INSERT_RDV___________________________________________
$app->post('/rdv/add', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $rdv = json_decode($data, true);

  $date_heure = $rdv['date_heure'];
  $id_patient = $rdv['id_patient'];
  $id_medecin = $rdv['id_medecin'];


  $sql = "INSERT INTO rdv(date_heure,id_patient,id_medecin) VALUES (:date_heure, :id_patient, :id_medecin)";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':date_heure',$date_heure);
    $q->bindParam(':id_patient',$id_patient);
    $q->bindParam(':id_medecin',$id_medecin);

    $stmt = $q->execute();
    
    $res = [
      'message' => "Votre rdv a été enregistré avec succes",
      "status" => 200
    ];
    $db = null;
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });


//______________________________________UPDATE_RDV_________________________________________
$app->put('/rdv/edit/{id}', function (Request $request, Response $response) {
  
  $id = $request->getAttribute('id');
  $data = $request->getBody()->getContents();

  $rdv = json_decode($data, true);
  $date_heure = $rdv['date_heure'];
  $id_patient = $rdv['id_patient'];
  $id_medecin = $rdv['id_medecin'];


  $sql = "UPDATE rdv 
  SET 
  date_heure = :date_heure, 
  id_patient = :id_patient, 
  id_medecin = :id_medecin


  WHERE id = :id";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':id',$id);
    $q->bindParam(':date_heure',$date_heure);
    $q->bindParam(':id_patient',$id_patient);
    $q->bindParam(':id_medecin',$id_medecin);


    
    $stmt = $q->execute();
    
    $res = [
      'message' => "Votre rdv est modifier avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });


//_____________________________________DELETE_RDV___________________________________________
$app->delete('/rdv/delete/{id}', function (Request $request, Response $response, array $args) {
  $id = $args['id'];
  $id = $request->getAttribute('id');

  $sql = "DELETE FROM rdv WHERE id = ". $id;
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $stmt = $q->execute();
    
    $res = [
      'message' => "rdv supprimé avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });

 

$app->run();
